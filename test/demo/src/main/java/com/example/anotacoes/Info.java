package com.example.anotacoes;

import java.lang.annotation.*;

/**
 * Anotação para informar metadados de classes ou métodos.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE, ElementType.METHOD })
@Documented
public @interface Info {
    /** Autor do elemento */
    String autor() default "";

    /** Versão do elemento */
    String versao() default "1.0";

    /** Descrição adicional */
    String descricao() default "";

    /** Tags para categorização */
    String[] tags() default {};
}
