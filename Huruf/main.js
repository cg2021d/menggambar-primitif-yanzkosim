var program;

function main() {
    A();F();K();
}

function A() {
    let canvas = document.getElementById("my-canvas");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        -0.05, 0.7,   
        0.55, -0.7,   
        0.05, 0.7,

        -0.05, 0.7,   
        0.45, -0.7,
        0.55, -0.7,

        -0.05, 0.7,   
        -0.55, -0.7,   
        0.05, 0.7,

        0.05, 0.7,   
        -0.45, -0.7,
        -0.55, -0.7,

        0.3, -0.05,
        0.3, -0.15,
        -0.3, -0.15,

        -0.3, -0.05,
        0.3, -0.05,
        -0.3, -0.15
    ];

    let vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoordinates), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    let vertexShaderCode = `
        attribute vec2 aCoordinates;
        void main() {
            gl_Position = vec4(aCoordinates, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;

    let fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.2, 0.4, 0.1, 1.0);
        }
    `;

    createShaderAndProgram(gl, vertexShaderCode, fragmentShaderCode);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.TRIANGLES, 0, 99);
}

function F() {
    let canvas = document.getElementById("my-canvas6");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        -0.4, 0.8,   
        -0.4, 0.65,   
        0.4, 0.65,

        -0.4, 0.8,   
        0.4, 0.65,
        0.4, 0.8,

        -0.4, 0.1,   
        -0.4, -0.05,   
        0.4, -0.05,

        -0.4, 0.1,   
        0.4, -0.05,
        0.4, 0.1,

        -0.4, 0.8,
        -0.3, 0.8,
        -0.4, -0.8,

        -0.3, 0.8,
        -0.3, -0.8,
        -0.4, -0.8
    ];

    let vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoordinates), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    let vertexShaderCode = `
        attribute vec2 aCoordinates;
        void main() {
            gl_Position = vec4(aCoordinates, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;

    let fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.2, 0.4, 0.1, 1.0);
        }
    `;

    createShaderAndProgram(gl, vertexShaderCode, fragmentShaderCode);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.TRIANGLES, 0, 99);
}

function K() {
    let canvas = document.getElementById("my-canvas11");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        -0.4, 0.8,
        -0.3, 0.8,
        -0.4, -0.8,

        -0.3, 0.8,
        -0.3, -0.8,
        -0.4, -0.8,

        -0.32, 0.1,   
        -0.32, -0.1,   
        0.2, 0.8,

        -0.32, -0.1,   
        0.3, 0.7,   
        0.2, 0.8,

        -0.32, 0.1,   
        -0.32, -0.1,   
        0.2, -0.8,

        -0.32, 0.1,   
        0.3, -0.7,   
        0.2, -0.8,
    ];

    let vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoordinates), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    let vertexShaderCode = `
        attribute vec2 aCoordinates;
        void main() {
            gl_Position = vec4(aCoordinates, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;

    let fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.2, 0.4, 0.1, 1.0);
        }
    `;

    createShaderAndProgram(gl, vertexShaderCode, fragmentShaderCode);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.TRIANGLES, 0, 99);
}

function createShaderAndProgram(gl, vertexShaderCode, fragmentShaderCode) {
    let vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
    
    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
}