import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="container-fluid">
                <a class="navbar-brand" href="/Home">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Reviews">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Pricing">Pricing</a>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;