const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());  

// MongoDB connection
const dbURI = "mongodb+srv://yazan:yazamano@cluster0.wsjk4eu.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// User schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

const appointmentSchema = new mongoose.Schema({
    fullName: String,
    phone: Number,
    date: Date, 
    condition: String,
    description: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);



// Routes
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

/* genSalt(10): دالة من مكتبة bcrypt. تقوم هذه الدالة بإنشاء ملح عشوائي لتشفير كلمة المرور. الرقم 10 هنا يمثل تعقيد الملح.
     كلما زاد هذا الرقم، زاد تعقيد وأمان الملح،
     ولكنه يتطلب أيضًا المزيد من قوة المعالجة. 
    */ 
    const salt = await bcrypt.genSalt(10);
    // هذا السطر يشفر كلمة المرور باستخدام الملح المُنشأ سابقًا، مما يزيد من أمان كلمة المرور المشفرة.
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword
    });

    await newUser.save(); 
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  //res.json(admin);   /* admin  هنا يقوم بارجاع لي قييمة ال  */ 


  try {
    const user = await User.findOne({ email });         
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password); 
    /*   يستخدم bcrypt
     لمقارنة كلمة المرور التي قدمها المستخدم مع كلمة المرور المخزنة في قاعدة البيانات. */
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});







app.post('/appointment', function(req,res) {
    const {fullName, phone, date, condition, description} = req.body;

    try{

        const appointment = new Appointment({fullName, phone, date, condition, description});
        
        appointment.save();

        res.status(201).json({ message: 'Appointment created' });

    } catch(err) {
        res.status(500).json({ message: 'Server error' });
    }

})




// Start server
app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
