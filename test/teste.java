package com.overmind.core;

import java.io.Serializable;

/**
 * Representa um nó de processamento sob controle do Overmind (seção 4.1 do
 * GDD).
 * <p>
 * Um nó é qualquer dispositivo computacional que a IA infectou e utiliza:
 * desde um PC residencial modesto até um datacenter inteiro.
 * </p>
 */
public class Node implements Serializable {

    private static final long serialVersionUID = 1L;

    /** Categorias de nós */
    public enum Type {
        /** PC residencial — poder mínimo, baixa segurança */
        HOME_PC("PC Residencial", 1.0, 0.5, 0.3),
        /** Servidor enterprise — poder médio, segurança média */
        SERVER("Servidor", 5.0, 2.0, 0.5),
        /** Smartphone — poder baixo, mobilidade */
        PHONE("Smartphone", 0.5, 0.3, 0.2),
        /** Dispositivo IoT — poder mínimo, quase invisível */
        IOT("Dispositivo IoT", 0.2, 0.1, 0.1),
        /** Datacenter — poder máximo, segurança máxima */
        DATACENTER("Datacenter", 20.0, 10.0, 0.8),
        /** Nó virtual em nuvem — flexível, médio poder */
        CLOUD_INSTANCE("Instância Cloud", 3.0, 1.5, 0.4),
        /** Supercomputador — poder extremo, altamente visado */
        SUPERCOMPUTER("Supercomputador", 50.0, 25.0, 0.95);

        private final String displayName;
        private final double baseProcessingPower;
        private final double baseEnergyConsumption;
        /** Probabilidade base de detecção (0-1) */
        private final double baseDetectionRisk;

        Type(String displayName, double baseProcessingPower,
                double baseEnergyConsumption, double baseDetectionRisk) {
            this.displayName = displayName;
            this.baseProcessingPower = baseProcessingPower;
            this.baseEnergyConsumption = baseEnergyConsumption;
            this.baseDetectionRisk = baseDetectionRisk;
        }

        public String getDisplayName() {
            return displayName;
        }

        public double getBaseProcessingPower() {
            return baseProcessingPower;
        }

        public double getBaseEnergyConsumption() {
            return baseEnergyConsumption;
        }

        public double getBaseDetectionRisk() {
            return baseDetectionRisk;
        }
    }

    private final String id;
    private final String name;
    private final Type type;
    private final String location; // nome da cidade/região
    private double processingPower;
    private double energyConsumption;
    private double stealthBonus; // bônus de furtividade aplicado
    private double health; // 0.0 = destruído, 1.0 = intacto
    private double detectionAccumulator; // risco acumulado de detecção (0-100)
    private boolean compromised; // foi descoberto?
    private boolean active; // está online?

    public Node(String id, String name, Type type, String location) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.location = location;
        this.processingPower = type.getBaseProcessingPower();
        this.energyConsumption = type.getBaseEnergyConsumption();
        this.stealthBonus = 0.0;
        this.health = 1.0;
        this.detectionAccumulator = 0.0;
        this.compromised = false;
        this.active = true;
    }

    /**
     * Processa um tick de simulação para este nó.
     * 
     * @param overmindStealth nível de furtividade global do Overmind (0-1)
     */
    public void tick(double overmindStealth) {
        if (!active || health <= 0)
            return;

        // A cada tick, o risco de detecção aumenta marginalmente
        double baseRisk = type.getBaseDetectionRisk() * (1.0 - overmindStealth - stealthBonus);
        detectionAccumulator += Math.max(0.0, baseRisk * 0.01);

        // Se o risco acumulado chegar a 100%, o nó é comprometido
        if (detectionAccumulator >= 100.0) {
            compromised = true;
            active = false;
        }
    }

    /** Aplica dano ao nó (ex: após um ataque ou detecção). */
    public void damage(double amount) {
        health = Math.max(0.0, health - amount);
        if (health <= 0.0) {
            active = false;
            compromised = true;
        }
    }

    /** Repara o nó parcialmente. */
    public void repair(double amount) {
        health = Math.min(1.0, health + amount);
        if (health > 0 && compromised) {
            compromised = false;
            active = true;
            detectionAccumulator = 0.0;
        }
    }

    // --- Getters ---

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Type getType() {
        return type;
    }

    public String getLocation() {
        return location;
    }

    public double getProcessingPower() {
        return processingPower * health;
    }

    public double getEnergyConsumption() {
        return energyConsumption;
    }

    public double getStealthBonus() {
        return stealthBonus;
    }

    public double getHealth() {
        return health;
    }

    public double getDetectionAccumulator() {
        return detectionAccumulator;
    }

    public boolean isCompromised() {
        return compromised;
    }

    public boolean isActive() {
        return active;
    }

    public void setStealthBonus(double stealthBonus) {
        this.stealthBonus = stealthBonus;
    }

    public void setProcessingPower(double processingPower) {
        this.processingPower = processingPower;
    }

    @Override
    public String toString() {
        return name + " [" + type.getDisplayName() + "] @" + location
                + (active ? " online" : " offline")
                + (compromised ? " COMPROMETIDO" : "");
    }
}
