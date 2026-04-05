const Record = require("../models/record")



/**
 * creatRecord contoller
 * 
 */
exports.createRecord = async(req,res)=>{
         try{
            const record = await Record.create({
                  ...req.body,
                  createdby:req.user.id
            })
            res.status(201).json(record);
         } catch(err){
                  res.status(500).json({error:err.message})
         }
}

/**
 * BulkCreate
 * 
 */
exports.bulkCreate = async (req, res) => {
  try {
    const records = await Record.insertMany(req.body);
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * gerRecord Controller
 */
exports.getRecords =  async(req,res)=>{
         try{
               const {type,category} = req.body;
               let filter={};
               if(type) filter.type = type;
               if(category) filter.category  = category;
               const record = await Record.find(filter);
               res.json(record);
         }catch(err){
                  res.status(500).json({
                           error:err.message
                  });
         }
};


/**
 * Update Record
 */

exports.updateRecord = async(req,res)=>{
         try{
             const record =  await Record.findByIdAndUpdate(
                  req.params.id,
                  req.body,
                  {new:true}
             )
             res.json({message:"Record Updaten Sucessfully !" ,record});
         }catch(err){
                  res.status(500).json({
                           error:err.message
                  })
         }
};

exports.deleteRecord = async(req,res)=>{
         try{
         await Record.findByIdAndDelete(req.params.id);
          res.json({message:"Record deleted!"})
         } catch(err){
                  res.status(500).json({
                           error:err.message
                  })
         }
}




