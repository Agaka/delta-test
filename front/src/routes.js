import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateStudents from './pages/CreateStudent';
import Students from './pages/Students';
import Student from './pages/Student';
import Landing from './pages/Landing';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/students" element={<Students />} />
                <Route path="/student" >
                    <Route path=":id" element={<Student />} />
                </Route>
                <Route path="/register" element={<CreateStudents />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Router;