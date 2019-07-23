import React, { Component } from 'react';
import './App.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class App extends Component {

  componentDidMount() {
    // grabbing the height and width of the div
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    // creating the scene 
    this.scene = new THREE.Scene();

    // creating the camera
    this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 10000 );
    this.camera.position.set( 2, 0, 1 );

    // creating light
    this.light = new THREE.AmbientLight( 0xffffff, 3.3 );
    this.scene.add(this.light);

    // creating a renderer
    this.renderer = new THREE.WebGLRenderer( {antialias:true} );
    this.renderer.gammaFactor = 1.5;
    this.renderer.gammaOutput = true;
    this.renderer.setSize( width, height );
    this.mount.appendChild( this.renderer.domElement );

    // creating orbit controls
    this.orbitControls = new OrbitControls( this.camera, this.renderer.domElement )
    this.orbitControls.addEventListener("change", () => this.renderer.render(this.scene, this.camera));

  }

  render() {
    return (
      <div className="App" ref={mount => {this.mount = mount}}>
      </div>
    );
  }
}
