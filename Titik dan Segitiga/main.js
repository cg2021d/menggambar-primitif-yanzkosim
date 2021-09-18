var program;

function main() {
    titik();
    titik_tiga();
    segitiga();
    segiempat();
    segiempat_line_loop();
    u();
}

function ShadernProgram(gl, vertexShaderCode, fragmentShaderCode) {
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
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

function titik() {
    let canvas = document.getElementById("canvas-titik");
    let gl = canvas.getContext("webgl");

    let vertexShaderCode = `
        void main() {
            gl_Position = vec4(0, 0, 0.0, 1.0);
            gl_PointSize = 20.0;
        }
    `;
    let fragmentShaderCode = `
    void main() {
        gl_FragColor = vec4(1.0, 0.3, 0.0, 0.9);
    }
    `;
    
    ShadernProgram(gl, vertexShaderCode, fragmentShaderCode);

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}

function titik_tiga() {
    let canvas = document.getElementById("canvas-3titik");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        0.0, 0.5,    //titik A
        0.5, -0.5,   //titik B
        -0.5, -0.5  //titik C
    ];

    let vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoordinates), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    let vertexShaderCode = `
        attribute vec2 aCoordinates;
        void main() {
            gl_Position = vec4(aCoordinates, 0.0, 1.0);
            gl_PointSize = 20.0;
        }
    `;

    let fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.2, 0.4, 0.1, 1.0);
        }
    `;

    ShadernProgram(gl, vertexShaderCode, fragmentShaderCode);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.POINTS, 0, 3);
}

function segitiga() {
    let canvas = document.getElementById("canvas-segitiga");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        0.5, 0.5,    //titik A
        0.5, -0.5,   //titik B
        -0.5, -0.5  //titik C
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
            gl_FragColor = vec4(0.5, 0.1, 0.8, 1.0);
        }
    `;

    ShadernProgram(gl, vertexShaderCode, fragmentShaderCode);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function segiempat() {
    let canvas = document.getElementById("canvas-segi-empat");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        0.5, 0.5,    //titik A
        0.5, -0.5,   //titik B
        -0.5, -0.5,  //titik C
        -0.5, 0.5
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
            gl_FragColor = vec4(0.2, 0.4, 1.0, 1.0);
        }
    `;

    ShadernProgram(gl, vertexShaderCode, fragmentShaderCode);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 6);
}

function segiempat_line_loop() {
    let canvas = document.getElementById("canvas-segi-empat-ls");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        0.5, 0.5,    //titik A
        0.5, -0.5,   //titik B
        -0.5, -0.5,  //titik C
        -0.5, 0.5
    ];

    let vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoordinates), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    let vertexShaderCode = `
        attribute vec2 aCoordinates;
        void main() {
            gl_Position = vec4(aCoordinates, 0.0, 1.0);
            gl_PointSize = 20.0;
        }
    `;

    let fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.2, 0.4, 0.4, 1.0);
        }
    `;

    ShadernProgram(gl, vertexShaderCode, fragmentShaderCode);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.LINE_LOOP, 0, 4);
}

function u() {
    let canvas = document.getElementById("canvas-u");
    let gl = canvas.getContext("webgl");

    let triangleCoordinates = [
        -0.3, 0.5,  // Titik A
        -0.3, -0.5, // Titik B
        0.3, -0.5,  // Titik C
        0.3, 0.5    // Titik D
    ];

    let vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoordinates), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    let vertexShaderCode = `
        attribute vec2 aCoordinates;
        void main() {
            gl_Position = vec4(aCoordinates, 0.0, 1.0);
            gl_PointSize = 20.0;
        }
    `;

    let fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(0.2, 0.4, 0.4, 1.0);
        }
    `;
    ShadernProgram(gl, vertexShaderCode, fragmentShaderCode);
        
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    let coordinates = gl.getAttribLocation(program, "aCoordinates");
    gl.vertexAttribPointer(coordinates, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordinates);

    gl.clearColor(1.0, 1.0, 1.0, .7);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.drawArrays(gl.LINE_STRIP, 0, 4);
}