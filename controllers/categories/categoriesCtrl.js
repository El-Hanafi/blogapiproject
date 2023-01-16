categoriesControllers= {
    ctgrPostCtrl:async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'category created'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    ctgrGetCtrl:async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'get category by id route'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    ctgrsGetCtrl: async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'get comments route'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    ctgrDeleteCtrl :async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'delete category route'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    ctgrUpdateCtrl: async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'update categories route'
            })
        } catch (error) {
            res.json(error.message);
        }
    }}
    
    module.exports=categoriesControllers;