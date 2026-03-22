import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    techStack: {
        type: [String],
        default: [],
    },
    projectUrl: {
        type: String,
    },
    githubLink: {
        type: String,
    }
}, {
    timestamps: true
});

export default mongoose.model('Project', projectSchema);
