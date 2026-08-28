package com.overmind;

public class Main {
    public static void main(String[] args) {
        Game game = new Game();
        game.getGameScreen().initInputs();
        game.start();
    }
}