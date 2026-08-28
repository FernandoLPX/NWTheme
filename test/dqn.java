package com.carroautonomo.ai;

import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.nd4j.linalg.api.ndarray.INDArray;
import org.nd4j.linalg.factory.Nd4j;

public class Dqn implements Brain {

    private double gamma;
    private ReplayMemory memory;
    private int memoryCapacity = 100000;
    private int batchSize = memoryCapacity / 10000;

    private Network model;
    private double epsilon = 0.1; // Taxa de exploração, % de chance de escolher uma ação aleatória (0.1 = 10%)
    private INDArray lastState;
    private int lastAction;
    private double lastReward;

    private int inputSize;
    private int nbAction;
    private float reward;

    private int action, action2;
    private Set<Integer> pressedKeys; // Conjunto para guardar e rastrear teclas pressionadas
    private Random rand;

    public Dqn() {
        this.reward = 0;
        this.action = 0;
        this.action2 = 0;
        this.pressedKeys = new HashSet<>(); // Inicializa o conjunto para rastrear teclas pressionadas
        this.rand = new Random();
    }

    public Dqn(int inputSize, int nbAction, double gamma) {
        this.inputSize = inputSize;
        this.nbAction = nbAction;
        this.gamma = gamma;
        this.memory = new ReplayMemory(memoryCapacity);
        this.model = new Network(inputSize, nbAction);
        this.lastState = Nd4j.zeros(1, inputSize);
        this.lastAction = 0;
        this.lastReward = 0;

        // Para o Dqn aleatório
        this.pressedKeys = new HashSet<>(); // Inicializa o conjunto para rastrear teclas pressionadas
        this.rand = new Random();
    }

    @Override
    public void update() {
        action = rand.nextInt(4) + 37; // Gera um número entre 37 e 40
        action2 = rand.nextInt(4) + 37;
        pressedKeys.add(action);
        pressedKeys.add(action2);
    }

    public void clearPressedKeys() {
        pressedKeys.clear();
    }

    public int selectAction(INDArray state) {
        // INDArray probs = model.forward(state).mul(100); // Calcula as probabilidades
        // // Normaliza as probabilidades
        // probs = probs.div(probs.sum(1)); // Certifique-se de que a soma das
        // probabilidades é 1

        // // Seleciona uma ação com base nas probabilidades
        // int action = Nd4j.getRandom().nextInt((int) probs.size(1)); // Gera um índice
        // aleatório
        // double randValue = Nd4j.getRandom().nextDouble(); // Gera um valor aleatório
        // entre 0 e 1

        // double cumulativeProbability = 0.0;
        // for (int i = 0; i < probs.size(1); i++) {
        // cumulativeProbability += probs.getDouble(0, i);
        // if (randValue <= cumulativeProbability) {
        // return i; // Retorna a ação correspondente ao índice
        // }
        // }
        // return -1; // Caso não encontre (não deve acontecer)

        // Estratégia epsilon-greedy
        // Probabilidade de explorar (escolher uma ação aleatória)
        if (Math.random() < epsilon) {
            return new Random().nextInt(nbAction); // Escolhe uma ação aleatória entre a qtde de ações
        } else {
            // Passa o estado para a rede neural retornar as predições
            INDArray qValues = model.forward(state);

            // Escolhe a ação com o maior valor Q
            return qValues.argMax(1).getInt(0); // Retorna o índice da ação com maior valor
        }
    }

    public void pushMemoryReplay(INDArray currentState, int action, float reward, INDArray nextState) {
        memory.push(new Experience(currentState, action, reward, nextState));
    }

    public void train() {
        if (memory.getMemory().size() < batchSize)
            return; // Aguarda até ter experiências suficientes

        // Seleciona experiências aleatórias do buffer de memória
        List<Experience> batch = memory.sample(batchSize);

        for (Experience exp : batch) {
            // Estado atual, próximo estado, ação e recompensa
            INDArray currentQValues = model.forward(exp.getState());
            INDArray nextQValues = model.forward(exp.getNextState());

            // Atualiza o valor de Q para a ação selecionada
            double targetQValue;
            targetQValue = exp.getReward() + gamma * Nd4j.max(nextQValues).getDouble(0); // Bellman equation

            currentQValues.putScalar(exp.getAction(), targetQValue);

            // Treina a rede ajustando os pesos
            model.fit(exp.getState(), currentQValues);
        }
    }

    public Set<Integer> getPressedKeys() {
        return pressedKeys;
    }

    public void addReward(float count) {
        reward += count;
    }

    public float getReward() {
        return reward;
    }

    public void setReward(float reward) {
        this.reward = reward;
    }

    public Network getNetwork() {
        return model;
    }

}