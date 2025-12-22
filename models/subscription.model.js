import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    price: {
        type: Number,
        required: [true, 'Subscription Price is required'],
        min: [0, 'Price cannot be negative'],
    },
    qurency: {
        type: String,
        emun: ['USD', 'EUR'],
        default: 'USD',
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String,
        enum: ['entertainment', 'education', 'productivity', 'other'],
        required: true,
    },
    paymendMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'canceled'],
        default: 'active',
    },
    startDate: {
        type: Date,
        required: [true, 'Start Date is required'],
        validate: {
            validator: (value) => value <= new Date()
        }
    },
    renewalDate: {
        type: Date,
        required: [true, 'Start Date is required'],
        validate: {
            validator: function(value){ 
                return value > this.startDate;
            },
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
}, { timestamps: true });

subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }

    next();
})


export const Subscription = mongoose.model('Subscription', subscriptionSchema);