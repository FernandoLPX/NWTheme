package com.example;

import com.example.interfaces.Processador;
import com.example.anotacoes.Info;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

/**
 * Classe de teste para o tema Meu Tema Pessoal.
 * Demonstra: classes, interfaces, abstrações, anotações,
 * métodos, estáticos, finals, enums, generics e mais.
 * 
 * @author Teste
 * @version 1.0
 */
@Info(autor = "Teste", versao = "1.0")
public abstract class TesteTema<T> implements Processador<T> {

    // ==================== CONSTANTES ====================
    public static final int MAX_TENTATIVAS = 3;
    public static final String PREFIXO = "[TESTE]";
    private static final List<String> LOGS = new ArrayList<>();

    // ==================== ENUMS ====================
    enum Prioridade {
        BAIXA,
        MEDIA("M"),
        ALTA("A", 10);

        private final String codigo;
        private final int nivel;

        Prioridade() {
            this.codigo = "";
            this.nivel = 0;
        }

        Prioridade(String codigo) {
            this.codigo = codigo;
            this.nivel = 0;
        }

        Prioridade(String codigo, int nivel) {
            this.codigo = codigo;
            this.nivel = nivel;
        }
    }

    enum Status {
        ATIVO(true),
        INATIVO(false),
        PENDENTE;

        private final boolean padrao;

        Status() {
            this.padrao = false;
        }

        Status(boolean padrao) {
            this.padrao = padrao;
        }
    }

    // ==================== ATRIBUTOS ====================
    private T item;
    protected String nome;
    int contador;
    private static int totalInstancias;
    private final int id;

    // ==================== CONSTRUTOR ====================
    public TesteTema() {
        this.id = gerarId();
    }

    protected TesteTema(String nome) {
        this();
        this.nome = nome;
    }

    // ==================== MÉTODOS ESTÁTICOS ====================
    public static int gerarId() {
        return ++totalInstancias;
    }

    public static <E> List<E> criarLista() {
        return new ArrayList<>();
    }

    public static final void metodoStaticFinal() {
        System.out.println("static final");
    }

    private static synchronized void metodoSync() {
        synchronized (TesteTema.class) {
            totalInstancias++;
        }
    }

    // ==================== MÉTODOS ABSTRATOS ====================
    @Override
    public abstract T processar(T entrada);

    @Override
    public abstract boolean validar(T entrada);

    // ==================== MÉTODOS CONCRETOS ====================
    public final void reset() {
        this.contador = 0;
        this.item = null;
    }

    @Override
    public void executar(List<T> itens) {
        for (T item : itens) {
            if (validar(item)) {
                processar(item);
            }
        }
    }

    protected synchronized void adicionarLog(String msg) {
        synchronized (LOGS) {
            LOGS.add(PREFIXO + " " + msg);
        }
    }

    // ==================== MÉTODOS COM GENERICS ====================
    public <R> R converter(T item, Class<R> tipo) {
        return null;
    }

    public T[] criarArray(int tamanho) {
        return null;
    }

    public Map<String, List<T>> agruparPorNome(List<T> itens) {
        Map<String, List<T>> grupos = new HashMap<>();
        return grupos;
    }

    // ==================== INTERFACES ====================
    interface Validavel {
        boolean isValido();
    }

    interface Configuravel<T> {
        void configurar(T config);
        T obterConfig();
        default void resetar() { }
    }

    // ==================== CLASSES INTERNAS ====================
    class ProcessadorInterno implements Validavel {
        private boolean valido = true;

        @Override
        public boolean isValido() {
            return this.valido;
        }

        public void processar() {
            // Uso de 'this' e 'TesteTema.this'
            TesteTema.this.adicionarLog("Processando...");
        }
    }

    static class Auxiliar {
        public static void metodoAuxiliar() {
            // Classe estática aninhada
        }
    }

    // ==================== ANOTAÇÕES CUSTOMIZADAS ====================
    @interface Autor {
        String nome();
        String email() default "";
        int versao() default 1;
    }

    @Autor(nome = "Dev", email = "dev@teste.com", versao = 2)
    public void metodoAnotado() { }

    // ==================== TIPOS PRIMITIVOS E WRAPPERS ====================
    public void testarPrimitivos() {
        int i = 10;
        long l = 100L;
        double d = 3.14;
        float f = 2.71f;
        char c = 'A';
        boolean b = true;
        byte b2 = 127;
        short s = 32000;

        Integer wi = Integer.valueOf(i);
        Long wl = Long.valueOf(l);
        Double wd = Double.valueOf(d);
        Boolean wb = Boolean.TRUE;
    }

    // ==================== OPERADORES ====================
    public void testarOperadores() {
        int a = 10, b = 20;
        boolean cond = true && false;
        cond = true || false;
        cond = !cond;
        int resultado = (a > b) ? a : b;
        resultado = a + b - 5 * 3 / 2;
        resultado = a & b | 0xFF;
        cond = (this instanceof TesteTema);
    }

    // ==================== CONTROLE DE FLUXO ====================
    public void testarControleFluxo() {
        if (contador > MAX_TENTATIVAS) {
            throw new IllegalStateException("Limite excedido");
        } else if (contador < 0) {
            contador = 0;
        } else {
            contador++;
        }

        for (;;) { break; }

        while (true) { break; }

        do { } while (false);

        switch (contador) {
            case 1: break;
            case 2: 
            case 3: break;
            default: break;
        }
    }

    // ==================== TRATAMENTO DE EXCEÇÕES ====================
    public void testarExcecoes() {
        try {
            throw new RuntimeException("Erro");
        } catch (IllegalStateException e) {
            System.err.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            reset();
        }
    }

    // ==================== ARRAYS E COLLECTIONS ====================
    public void testarArrays() {
        int[] arrayInteiros = { 1, 2, 3 };
        String[][] matriz = new String[2][3];
        List<String> lista = List.of("a", "b", "c");
        Map<String, Integer> mapa = Map.of("x", 1, "y", 2);
    }
}

// ==================== CLASSE SELADA ====================
sealed abstract class Forma implements Desenhavel permits Circulo, Quadrado {
    public abstract double calcularArea();
}

sealed interface Desenhavel permits Forma {
    void desenhar();
}

final class Circulo extends Forma {
    private final double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }

    @Override
    public void desenhar() {
        System.out.println("Círculo");
    }
}

non-sealed class Quadrado extends Forma {
    private double lado;

    @Override
    public double calcularArea() {
        return lado * lado;
    }

    @Override
    public void desenhar() {
        System.out.println("Quadrado");
    }
}

// ==================== RECORD (Java 16+) ====================
record Cliente(String nome, int idade, List<String> telefones) {
    public Cliente {
        if (idade < 0) throw new IllegalArgumentException();
    }

    public String getResumo() {
        return nome + " - " + idade;
    }
}

sealed interface Resultado<T> permits Sucesso, Falha {
}

final record Sucesso<T>(T valor) implements Resultado<T> { }
record Falha<T>(String erro) implements Resultado<T> { }

// ==================== ENUM COM CONSTRUTOR ====================
enum Color {
    RED("#FF0000"),
    GREEN("#00FF00"),
    BLUE("#0000FF");

    private final String hex;

    Color(String hex) {
        this.hex = hex;
    }

    public String getHex() {
        return hex;
    }
}
