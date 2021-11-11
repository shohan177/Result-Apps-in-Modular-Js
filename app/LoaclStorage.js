class LoaclStorage{

    /**
     * get data form loacl storage
     */
    static  get() {
        let storage = localStorage.getItem('marks');
        //empty array 
        let data_arry;
        if (storage == null) {
            data_arry = [];
           
        } else {
            data_arry = JSON.parse(storage);
        }
    
        return data_arry;
    }


    /**
     * set data in loacl storage
     */
    static set(data) {
        localStorage.setItem('marks', JSON.stringify(data));
    }

}

export default LoaclStorage;