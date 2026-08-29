package com.example.enums;

/**
 * Enum representando status de operações.
 */
public enum Status {
    /** Status ativo */
    ATIVO(true),

    /** Status inativo */
    INATIVO(false),

    /** Status pendente de ação */
    PENDENTE;

    private final boolean padrao;

    Status() {
        this.padrao = false;
    }

    Status(boolean padrao) {
        this.padrao = padrao;
    }

    public boolean isPadrao() {
        return padrao;
    }

    public static Status fromBoolean(boolean valor) {
        return valor ? ATIVO : INATIVO;
    }
}
