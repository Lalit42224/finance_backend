const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },

  type: {
    type: String,
    enum: ["income", "expense"],
    required: true
  },

  category: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now // 🔥 BUG FIX (deafult → default)
  },

  note: String,

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, {
  timestamps: true
});


// 🚀 INDEXING (IMPORTANT)

// 🔹 Single field indexes
recordSchema.index({ type: 1 });
recordSchema.index({ category: 1 });
recordSchema.index({ date: -1 });

// 🔹 Compound index (INTERVIEW GOLD 🔥)
recordSchema.index({ type: 1, category: 1 });

// 🔹 User-based queries (multi-user support)
recordSchema.index({ createdBy: 1 });


module.exports = mongoose.model("Record", recordSchema);