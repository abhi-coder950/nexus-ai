const mongoose = require('mongoose');

const medicineReminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, default: 'medicine', enum: ['medicine', 'vehicle'] },
  // Medicine fields
  medicineName: { type: String, default: '' },
  dosage: { type: String, default: '' },
  frequency: { type: String, enum: ['once', 'twice', 'thrice', 'four_times', 'as_needed'], default: 'once' },
  times: [{ type: String }], // ['08:00', '20:00']
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: null },
  notes: { type: String, default: '' },
  // Vehicle fields
  vehicleName: { type: String, default: '' },
  vehiclePlate: { type: String, default: '' },
  vehicleType: { type: String, enum: ['car', 'bike', 'scooter', 'truck', 'other'], default: 'car' },
  serviceType: { type: String, default: '' },
  serviceDueDate: { type: Date, default: null },
  estimatedCost: { type: Number, default: 0 },
  serviceHistory: [{
    date: Date,
    description: String,
    cost: Number,
    odometer: Number
  }],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reminder', medicineReminderSchema);
