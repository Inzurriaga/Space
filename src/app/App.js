import React, { Component } from 'react';
import './App.css';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import sun from "../3DModels/sun.gltf";
import mercury from "../3DModels/mercury.gltf";
import venus from "../3DModels/venus.gltf";
import earth from "../3DModels/earth.gltf";
import mars from "../3DModels/mars.gltf";
import jupiter from "../3DModels/jupiter.gltf";
import saturn from "../3DModels/saturn.gltf";
import uranus from "../3DModels/uranus.gltf";
import neptune from "../3DModels/neptune.gltf";
import Particles from "react-particles-js";

export default class App extends Component {

  componentDidMount() {
    // grabbing the height and width of the div and setting global var
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.sun = null;
    this.mercury = null;
    this.venus = null;
    this.earth = null;
    this.mars = null;
    this.jupiter = null;
    this.saturn = null;
    this.uranus = null;
    this.neptune = null;

    // creating the scene 
    this.scene = new THREE.Scene();

    // creating the camera
    this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 10000 );
    this.camera.position.set( 5, 5, 5 );

    // creating light
    this.light = new THREE.AmbientLight( 0xffffff, 3.3 );
    this.scene.add(this.light);

    // creating a renderer
    this.renderer = new THREE.WebGLRenderer( {antialias:true, alpha: true} );
    this.renderer.gammaFactor = 1;
    this.renderer.gammaOutput = true;
    this.renderer.setSize( width, height );
    this.renderer.setClearColor(0xffffff, 0);
    this.mount.appendChild( this.renderer.domElement );

    // creating orbit controls
    this.orbitControls = new OrbitControls( this.camera, this.renderer.domElement )
    this.orbitControls.addEventListener("change", () => this.renderer.render(this.scene, this.camera));


    const size = 10;
    const divisions = 30;
    const gridHelper = new THREE.GridHelper( size, divisions );
    this.scene.add( gridHelper );

    // creating loader
    const loader = new GLTFLoader()

    // loading in sun model
    loader.load(sun, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.sun = gltf.scene
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("sun model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in mercury model
    loader.load(mercury, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.mercury = gltf.scene
        this.mercury.position.x = 2
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("mercury model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in venus model
    loader.load(venus, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.venus = gltf.scene
        this.venus.position.x = 4
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("venus model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in earth model
    loader.load(earth, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.earth = gltf.scene
        this.earth.position.x = 6
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("earth model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in mars model
    loader.load(mars, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.mars = gltf.scene
        this.mars.position.x = 8
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("mars model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in jupiter
    loader.load(jupiter, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.jupiter = gltf.scene
        this.jupiter.position.x = 10
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("jupiter model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in saturn
    loader.load(saturn, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.saturn = gltf.scene
        this.saturn.position.x = 12
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("saturn model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in uranus
    loader.load(uranus, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.uranus = gltf.scene
        this.uranus.position.x = 14
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("uranus model did not load")
      }
    }, undefined, error => console.log("error"));

    // loading in neptune
    loader.load(neptune, gltf => {
      this.scene.add(gltf.scene)
      if(gltf.scene) {
        this.neptune = gltf.scene
        this.neptune.position.x = 16
        this.renderer.render(this.scene, this.camera)
      }else {
        console.log("neptune model did not load")
      }
    }, undefined, error => console.log("error"));

  }

  render() {
    return (
      <div style={{ width: window.innerWidth, height: window.innerHeight, backgroundColor: "#000000"}} >
        <div className="App"  
          style={{ width: window.innerWidth, height: window.innerHeight, position: "absolute", zIndex: 2 }} 
          ref={mount => {this.mount = mount}}>
        </div>
        <Particles  style={{position: "absolute", zIndex: 1}} params={{
            "particles": {
                "number": {
                    "value": 400
                },
                "size": {
                    "value": 1
                },
                "line_linked": {
                  "enable": false
                },
                "opacity": {
                  "value": 1,
                  "anim": {
                    "enable": true,
                    "speed": 4,
                    
                  }
                },
                "move": {
                  "speed": 0.2
                }
            }
        }}/>
      </div>
    );
  }
}
