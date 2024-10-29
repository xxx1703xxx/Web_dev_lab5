import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DataProvider } from './DataContext';
import { AnotherProvider } from './AnotherContext';
import { NavigationHistoryProvider } from './NavigationHistoryContext';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import CategoriesComponent from './CategoriesComponent';
import CategoryPage from './CategoryPage';
import SomeComponent from './SomeComponent';
import DebugWindow from './DebugWindow';

const App = () => (
    <DataProvider>
        <AnotherProvider>
            <NavigationHistoryProvider>
                <Router>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/categories">Categories</Link>
                    </nav>

                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/about" element={<AboutComponent />} />
                        <Route path="/categories" element={<CategoriesComponent />} />
                        <Route path="/category/:category" element={<CategoryPage />} />
                    </Routes>

                    {}
                    <SomeComponent />
                    <DebugWindow />
                </Router>
            </NavigationHistoryProvider>
        </AnotherProvider>
    </DataProvider>
);

export default App;
