let hydra, hydraCanvas, aframeCanvas;

        
        document.querySelector('a-scene').addEventListener('loaded', function() {
          
            aframeCanvas = this.canvas;
            
  
            hydraCanvas = document.getElementById('hydraCanvas');
            hydraCanvas.width = window.innerWidth;
            hydraCanvas.height = window.innerHeight;
            

            hydra = new Hydra({
                canvas: hydraCanvas,
                enableStreamCapture: false,
                detectAudio: true,
                width: window.innerWidth,
                height: window.innerHeight,
                autoLoop: true,
                makeGlobal: true  
            });
            

            setTimeout(() => {
                if (typeof s0 !== 'undefined') {
                
                    s0.init({ src: aframeCanvas });
                    
                    src(s0)
                    .blend(src(o0).scrollX(0.005),[0,0.5].smooth())
                    .add(src(o0),0.5)
                    .layer(src(s0).diff(src(o0).scrollY(0.001)).mask(shape(4,[0,1].fast(0.5),0)))
                    .layer(src(o0).brightness(0.001).saturate(1.001).scrollY(0.001)
                .mask(noise(5,0.1).thresh(0.5,0).pixelate(10,5)))
                    //.mask(shape(4,0.5,0).scale(1,0.5).scroll(-0.2,-0.1)))
                    .out();

                   src(o0).add(noise(300,2).luma(),0.1).out(o1)
                   
                   render(o1)
                } 
            }, 1000); 
        });

        
        window.addEventListener('resize', function() {
            if (hydraCanvas) {
                hydraCanvas.width = window.innerWidth;
                hydraCanvas.height = window.innerHeight;
            }
            if (hydra) {
                
                hydra.setResolution(window.innerWidth, window.innerHeight);
            }
        });