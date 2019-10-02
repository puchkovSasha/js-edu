var { expect } = require('chai');



const defaultStudentSpeedConfig = {
    family: 4,
    friends: 10,
    normal_life: 20,
    profession: 30,
    carrier: 40,
    top_peformance: 60
};

const problemStudentSpeedConfig = {
    family: 2,
    friends: 4,
    normal_life: 8,
    profession: 20,
    carrier: 30
};

const talentedStudentSpeedConfig = {
    normal_life: 30,
    profession: 40,
    carrier: 55,
    top_peformance: 70
};


function getTimeForEducation(
    focus, 
    knowsProgramming,
    config
    ) {
        if (config === defaultStudentSpeedConfig) {
        
                if (knowsProgramming === true) {
    
                    let score = 800;
            
                    let amount = score / config[focus];
            
                    return Math.ceil(amount);
                    
                } else{
                    
                    let score = 1300;
            
                    let amount = score / config[focus];
            
                    return Math.ceil(amount);
                }
            }
        if (config === problemStudentSpeedConfig) {
        
                if (knowsProgramming === true) {
    
                    let score = 800;
            
                    let amount = score / config[focus];
            
                    return Math.ceil(amount);
                    
                }  else{
                    
                    let score = 1300;
            
                    let amount = score / config[focus];
            
                    return Math.ceil(amount);
                }
            }
        if (config === talentedStudentSpeedConfig) {
        
                if (knowsProgramming === true) {
    
                    let score = 800;
            
                    let amount = score / config[focus];
            
                    return Math.ceil(amount);
                    
                } 
            }
           
        }

        



  const weeks = getTimeForEducation('family', true,  defaultStudentSpeedConfig);
  
