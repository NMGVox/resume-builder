import { useState } from 'react';
import Category from './components/category';
import './App.css'


function App() {

  return (
    <>
      <div className="input-container">
        <div className="category">
          <h1 className="title">Resume Builder</h1>
        </div>
        <Category categoryName="Personal Info" />
        <Category categoryName="Education" />
        <Category categoryName="Work Experience" />
        <Category categoryName="Projects" />
      </div>
      <div className="resume-display">
        <div className="resume">
        </div>
      </div>
    </>
  );
}
export default App
