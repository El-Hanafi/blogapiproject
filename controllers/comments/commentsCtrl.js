commentsControllers= {
    cmntPostCtrl:async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'comment created'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    cmntGetCtrl:async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'get comment by id route'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    cmntsGetCtrl: async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'get comments route'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    cmntDeleteCtrl :async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'delete comment route'
            })
        } catch (error) {
            res.json(error.message);
        }
    },
    
    cmntUpdateCtrl: async(req, res)=>{
        try {
            res.json({
                status: 'success',
                data: 'update comments route'
            })
        } catch (error) {
            res.json(error.message);
        }
    }}
    
    module.exports=commentsControllers;