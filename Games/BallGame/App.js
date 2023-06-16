import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const FIELD_WIDTH = 10;
const FIELD_HEIGHT = 10;
const EMPTY = ' ';
const BALL = 'O';
const VERTICAL_CANNON = '|';
const HORIZONTAL_CANNON = '-';
const BEAM = 'x';
const MAX_LIVES = 5;
const MAX_TIME = 30;

const App = () => {
  const [field, setField] = useState([]);
  const [lives, setLives] = useState(MAX_LIVES);
  const [time, setTime] = useState(MAX_TIME);
  const [cannon, setCannon] = useState({ x: Math.floor(FIELD_WIDTH / 2), y: Math.floor(FIELD_HEIGHT / 2) });
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    initializeField();
    const gameInterval = setInterval(() => {
      updateField();
      moveBalls();
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(gameInterval);
  }, []);

  const initializeField = () => {
    const newField = [];
    for (let i = 0; i < FIELD_HEIGHT; i++) {
      newField[i] = [];
      for (let j = 0; j < FIELD_WIDTH; j++) {
        if (i === 0 || i === FIELD_HEIGHT - 1 || j === 0 || j === FIELD_WIDTH - 1) {
          newField[i][j] = '#'; // boundary walls
        } else {
          newField[i][j] = EMPTY;
        }
      }
    }
    setField(newField);
  };

  const updateField = () => {
    const newField = [...field];
    for (let i = 0; i < FIELD_HEIGHT; i++) {
      for (let j = 0; j < FIELD_WIDTH; j++) {
        if (newField[i][j] === BEAM) {
          if (i > 0 && newField[i - 1][j] === BALL) {
            newField[i - 1][j] = EMPTY;
            setLives((prevLives) => prevLives - 1);
          } else {
            newField[i][j] = EMPTY;
            if (i > 0) {
              newField[i - 1][j] = BEAM;
            }
          }
        }
      }
    }

    for (const ball of balls) {
      newField[ball.y][ball.x] = BALL;
    }

    newField[cannon.y][cannon.x] =
      cannon.x === 0 || cannon.x === FIELD_WIDTH - 1 ? VERTICAL_CANNON : HORIZONTAL_CANNON;

    setField(newField);
  };

  const moveBalls = () => {
    const newBalls = [];
    for (const ball of balls) {
      let dx = ball.x < cannon.x ? 1 : -1;
      let dy = ball.y < cannon.y ? 1 : -1;
      let x = ball.x + dx;
      let y = ball.y + dy;

      if (x === 0 || x === FIELD_WIDTH - 1) {
        dx *= -1;
        x += dx;
      }

      if (y === 0 || y === FIELD_HEIGHT - 1) {
        dy *= -1;
        y += dy;
      }

      newBalls.push({ x, y });
    }
    setBalls(newBalls);
  };

  const isGameOver = () => {
    return lives <= 0 || time <= 0;
  };

  return (
    <View>
      <Text>Field:</Text>
      {field.map((row, rowIndex) => (
        <Text key={rowIndex}>{row.join('')}</Text>
      ))}
      <Text>Lives: {lives}</Text>
      <Text>Time: {time}</Text>
      {isGameOver() && <Text>Game Over!</Text>}
    </View>
  );
};

export default App;
