const {ChildService} = require("../services");

//create Child

const CreateChild =async (req ,res) =>{
     try {
          const reqBody = req.body;

          const child = await ChildService.ChildCreate(reqBody);
          if(!child){
            throw new Error("User Not Created , Please try again later !...");
          }

          res.status(200).json({
            success: true,
            message: "Suucessfully Child Created!...",
            data:  child
          })
     } catch (error) {
        res.status(400).json({success : false , message : error.message});
     }
}

//Child list
const  ChildList = async (req ,res) =>{
    try {
            const list = await  ChildService.ChildList(req , res);

            res.status(200).json({
                success : true,
                message : " Child Data SuccessFully Get !.....",
                data : list
            })
    } catch (error) {
        res.status(400).json({success : false , message : error.message});
    }
}

//get Child id

const childId = async ( req ,res) =>{
    try {
            const  childId = req.params.childId;
            const ID = await ChildService.ChildId(childId);
            if(!ID){
                throw new Error("Child Not Found !...");
            };
            res.status(200).json({
                success: true,
                message: "Suucessfully Child List Get!....",
                data: { ID }
            })
    } catch (error) {
        res.status(400).json({success : false , message : error.message});
    }
}

//delete Child

const DeleteChild = async (req ,res) =>{
     try {
        const  childId = req.params.childId;
        const ID = await ChildService.ChildId(childId);
        if(!ID){
            throw new Error("Child Not Found !...");
        };

        await ChildService.DeleteChild(childId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Child Details Deleted!....",
        });
     } catch (error) {
        res.status(400).json({success : false , message : error.message});
     }
}

//update Child

const UpdateChild = async (req,res) =>{
     try {
        const  childId = req.params.childId;
        const ID = await ChildService.ChildId(childId);
        if(!ID){
            throw new Error("Child Not Found !...");
        };
        await ChildService.UpdateChild(childId , req.body);

        res.status(200).json({
            success: true,
            message: "Child details update successfully!"
        });
     } catch (error) {
        res.status(400).json({success : false , message : error.message});
     }
}

module.exports = {
    CreateChild,
    ChildList,
    childId,
    DeleteChild,
    UpdateChild
}