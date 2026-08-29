#!/usr/bin/env bash
# ============================================================================
# Sobe a "tela virtual" do container e a expõe no navegador do host.
#
# Componentes:
#   1. Xvfb        — servidor X em memória (:99, 1280x800)
#   2. openbox     — window manager leve (foco de teclado p/ o jogo)
#   3. x11vnc      — expõe o display como VNC (porta 5900)
#   4. websockify  — serve o noVNC (http://localhost:6080/vnc.html)
#
# Depois de rodar, abra no navegador do host:
#   http://localhost:6080/vnc.html?autoconnect=true&host=localhost&port=6080
#   (sem senha — ambiente local de desenvolvimento)
#
# Ver também: scripts/rodar-jogo.sh e scripts/parar-tela-virtual.sh
# ============================================================================
set -euo pipefail
cd "$(dirname "$0")/.."

DISPLAY_NUM="${DISPLAY_NUM:-:99}"
NUM="${DISPLAY_NUM#:}"
VNC_PORT="${VNC_PORT:-5900}"
WEB_PORT="${WEB_PORT:-6080}"

# Retorna 0 se houver um processo VIVO (ignora zumbis <defunct>) casando o padrão.
# pgrep -f também casa com processos zumbis; isso fazia o script "pular"
# componentes que na verdade não estavam rodando.
proc_alive() {
    local pat="$1" pid state
    for pid in $(pgrep -f "$pat" 2>/dev/null || true); do
        if [[ -r "/proc/$pid/stat" ]]; then
            state=$(awk '{print $3}' "/proc/$pid/stat")
            if [[ "$state" != "Z" ]]; then
                return 0
            fi
        fi
    done
    return 1
}

# ---------- 1. Xvfb ----------
if [[ -S "/tmp/.X11-unix/X${NUM}" ]]; then
    echo "==> Xvfb já ativo em :${NUM}"
else
    echo "==> Iniciando Xvfb em :${NUM} (1282x741) ..."
    Xvfb ":${NUM}" -screen 0 1282x741x24 >/tmp/xvfb.log 2>&1 &
    sleep 0.8
    if [[ ! -S "/tmp/.X11-unix/X${NUM}" ]]; then
        echo "ERRO: Xvfb não subiu (veja /tmp/xvfb.log)" >&2
        exit 1
    fi
fi
export DISPLAY=":${NUM}"

# ---------- 2. Window manager (foco de teclado) ----------
if ! proc_alive "openbox"; then
    echo "==> Iniciando openbox (window manager) em :${NUM} ..."
    openbox >/tmp/openbox.log 2>&1 &
    sleep 0.5
else
    echo "==> openbox já ativo"
fi

# ---------- 3. x11vnc ----------
if ! proc_alive "x11vnc"; then
    echo "==> Iniciando x11vnc em :${NUM}:${VNC_PORT} ..."
    x11vnc -display ":${NUM}" -forever -shared -nopw \
        -rfbport "${VNC_PORT}" >/tmp/x11vnc.log 2>&1 &
    sleep 0.8
else
    echo "==> x11vnc já ativo"
fi

# ---------- 4. noVNC (websockify) ----------
if ! proc_alive "websockify"; then
    echo "==> Iniciando noVNC em http://localhost:${WEB_PORT}/vnc.html ..."
    websockify --web=/usr/share/novnc "${WEB_PORT}" "localhost:${VNC_PORT}" \
        >/tmp/websockify.log 2>&1 &
    sleep 0.8
else
    echo "==> noVNC já ativo"
fi

echo ""
echo "✅ Tela virtual pronta em :${NUM} (1282x741) com VNC"
echo "   - No navegador do host:"
echo "     http://localhost:${WEB_PORT}/vnc.html?autoconnect=true&host=localhost&port=${WEB_PORT}"
echo "   - VNC direto: vnc://localhost:${VNC_PORT} (sem senha)"
echo ""
echo "Para rodar o jogo nessa tela: scripts/rodar-jogo.sh"
