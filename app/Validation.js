class Validation{
    /**
     * empty check
     */
    static empty(val) {
        if (val == "") {
            return true;
        } else {
            return false;
        }
    }

    /**
     * all fild check
     */
    static fildReq(filds) {
        let val;
        for (let i = 0; i < filds.length; i++) {
            if (this.empty(filds[i].value)) {
                 val = true;
            } else {
                 val = false;
            }
        }

        return val;
    }

    /**
     * gpa and grad calculation
     */
    static gpaGrad(marks){
            let gpa = ""
            let grad = ""
        if( marks > 0 && marks <= 32 ){
            gpa = 0
            grad = "F"
        }else if(marks >= 33 && marks <= 39){
            gpa = 1
            grad = "D"
        }else if(marks >= 40 && marks <= 49){
            gpa = 2
            grad = "c"
        }else if(marks >= 50 && marks <= 59){
            gpa = 3
            grad = "B"
        }else if(marks >= 60 && marks <= 69){
            gpa = 3.5
            grad = "-A"
        }else if(marks >= 70 && marks <= 79){
            gpa = 4
            grad = "A"
        }else if(marks >= 80 && marks <= 100){
            gpa = 5
            grad = "A+"
        } else {
            gpa = "Invalid"
            grad = "Invalid"
            }
            
        //result array
        let result = {
        gpa,
        grad
        }
        
        return result;

    }

    /**
     * cgpa and grad clculation
     */

     static cgpa(m1, m2, m3, m4, m5, m6){

        let total_gpa = this.gpaGrad(m1).gpa + this.gpaGrad(m2).gpa + this.gpaGrad(m3).gpa + this.gpaGrad(m4).gpa + this.gpaGrad(m5).gpa + this.gpaGrad(m6).gpa ;

        if( m1 > 32 && m2 > 32 && m3 > 32 && m4 > 32 && m5 > 32 && m6 > 32 ){
            let cgpa = (total_gpa / 6).toFixed(2);
            let gpa = "";
            if(cgpa == 5 ){
                gpa = 'A+';
            }else if( cgpa >= 4 && cgpa < 5 ){
                gpa = 'A';
            }else if( cgpa >= 3.5 && cgpa < 4 ){
                gpa = 'A-';
            }else if( cgpa >= 3 && cgpa < 3.5 ){
                gpa = 'B';
            }else if( cgpa >= 2 && cgpa < 3 ){
                gpa = 'C';
            }else if( cgpa >= 1 && cgpa < 2 ){
                gpa = 'D';
            }else if( cgpa < 1 ){
                gpa = 'Failed';
            }

            //return object
            let result = {
                cgpa,
                gpa
            }
            
            return result;
        }else{
            let result = {
                cgpa: 0,
                gpa: "F"
            }
            
            return result;
        } 

    }



}

export default Validation;