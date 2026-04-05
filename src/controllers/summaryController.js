const Record  =  require("../models/record")


exports.getSummary = async(req,res)=>{
         try{
            const records = await Record.find();
            let totalIncome= 0 ;
            let totalExpense = 0 ;
            records.forEach(r=>{
                  if(r.type==="income") totalIncome +=r.amount;
                  else totalExpense+=r.amount;
            });
              res.json({
                  totalIncome,
                  totalExpense,
                  netBalance:totalIncome - totalExpense
              });
         } catch(err){
                  res.status(500).json({
                           error:err.message
                  });
         }
};


/**
 * CATEGORY_WISE TOTAL
 */

exports.categorySummary = async(req,res)=>{
         try{
              const data  =  await Record.aggregate([
                  {
                           $group:{
                                    _id:"$category",
                                    total:{$sum:"$amount"}
                           }
                  }
              ]);
              res.json(data);
         }catch(err){
                  res.status(500).json({err:err.message});
         }
}




/**
 * MONTHLY TREND
 */

exports.monthlySummary = async(req,res)=>{
         try{
                  const data =  await Record.aggregate([
                           {
                                    $group:{
                                          _id:{$month:"$date"},
                                          total:{$sum:"$amount"}   
                                    }
                           },
                           {$sort:{"_id":1}}
                  ]);
                  res.json(data);
         } catch(err){
                  res.status(500).json({error:err.message});
         }
};