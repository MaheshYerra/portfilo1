import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (error) {
        next(error);
    }
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Public
router.post('/', async (req, res, next) => {
    try {
        const { title, description, imageUrl, techStack, projectUrl, githubLink } = req.body;
        
        const project = new Project({
            title,
            description,
            imageUrl: imageUrl || '',
            techStack,
            projectUrl,
            githubLink
        });

        const createdProject = await project.save();
        res.status(201).json(createdProject);
    } catch (error) {
        next(error);
    }
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Public
router.put('/:id', async (req, res, next) => {
    try {
        const { title, description, imageUrl, techStack, projectUrl, githubLink } = req.body;
        const project = await Project.findById(req.params.id);

        if (project) {
            project.title = title || project.title;
            project.description = description || project.description;
            project.imageUrl = imageUrl || project.imageUrl;
            project.techStack = techStack || project.techStack;
            project.projectUrl = projectUrl || project.projectUrl;
            project.githubLink = githubLink || project.githubLink;

            const updatedProject = await project.save();
            res.json(updatedProject);
        } else {
            res.status(404);
            throw new Error('Project not found');
        }
    } catch (error) {
        next(error);
    }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Public
router.delete('/:id', async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);

        if (project) {
            await Project.deleteOne({ _id: project._id });
            res.json({ message: 'Project removed' });
        } else {
            res.status(404);
            throw new Error('Project not found');
        }
    } catch (error) {
        next(error);
    }
});

export default router;
