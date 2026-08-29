package com.example.interfaces;

/**
 * Interface genérica para processadores.
 * 
 * @param <T> tipo de entrada e saída
 */
public interface Processador<T> {

    /**
     * Processa um item do tipo T.
     * 
     * @param entrada item a ser processado
     * @return resultado do processamento
     */
    T processar(T entrada);

    /**
     * Valida se o item pode ser processado.
     * 
     * @param entrada item a ser validado
     * @return true se válido
     */
    boolean validar(T entrada);

    /**
     * Executa o processamento em lote.
     * 
     * @param itens lista de itens
     */
    default void executar(java.util.List<T> itens) {
        for (T item : itens) {
            if (validar(item)) {
                processar(item);
            }
        }
    }

    /**
     * Reset do processador.
     */
    default void reset() {
        // implementação padrão vazia
    }
}
