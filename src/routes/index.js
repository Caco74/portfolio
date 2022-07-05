import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'First Website'}))

router.get('/about', (req, res) => res.render('about', {title: 'About'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contact'}))

router.get('/skills', (req, res) => res.render('skills', {title: 'Skills'}))

router.get('/proyectos', (req, res) => res.render('proyectos', {title: 'Proyectos'}))

router.get('/detalle-changarin', (req, res) => res.render('detalle-changarin', {title: 'Detalle Changarin'}))

router.get('/detalle-billing-system', (req, res) => res.render('detalle-billing-system', {title: 'Detalle billing system'}))

router.get('/detalle-agenda-api', (req, res) => res.render('detalle-agenda-api', {title: 'Detalle agenda'}))

export default router