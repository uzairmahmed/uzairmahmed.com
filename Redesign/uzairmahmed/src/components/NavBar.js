import React from 'react';
//import './App.css'; specific css file

function NavBar() {
  return (
    <nav class="navbar navbar-dark navbar-expand-md fixed-top" style={styles.navContainer}>
        <div class="container-fluid"><a class="navbar-brand" href="/" style={styles.navItem}>Uzair Ahmed</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="/"          style={styles.navItem}>home.</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="/"     style={styles.navItem}>about.</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="/"    style={styles.navItem}>skills.</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="/"  style={styles.navItem}>projects.</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="/"   style={styles.navItem}>contact.</a></li>
                </ul>
        </div>
        </div>
    </nav>
  );
}

export default NavBar;

const styles = {
  navContainer: {
    width: '100%',
    padding: '16px',
  },
  
  navItem: {
    fontFamily: 'Raleway, sansSerif',
    fontWeight: 200,
  },
}