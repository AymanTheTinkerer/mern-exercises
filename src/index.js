import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercises";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ExercisesList />} />
      <Route path="/edit/:id" element={<EditExercise />} />
      <Route path="/create" element={<CreateExercise />} />
      <Route path="/user" element={<CreateUser />} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

