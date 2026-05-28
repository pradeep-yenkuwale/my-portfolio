import html from '../../public/svg/skills/html.svg';
import css from '../../public/svg/skills/css.svg';
import javascript from '../../public/svg/skills/javascript.svg';
import typescript from '../../public/svg/skills/typescript.svg';
import nodejs from '../../public/svg/skills/nodejs.svg';
import nestjs from '../../public/svg/skills/nestjs.svg';
import python from '../../public/svg/skills/python.svg';
import flutter from '../../public/svg/skills/flutter.svg';
import dart from '../../public/svg/skills/dart.svg';
import mongodb from '../../public/svg/skills/mongoDB.svg';
import mysql from '../../public/svg/skills/mysql.svg';
import sqlite from '../../public/svg/skills/sqlite.svg';
import firebase from '../../public/svg/skills/firebase.svg';
import aws from '../../public/svg/skills/aws.svg';
import nginx from '../../public/svg/skills/nginx.svg';
import docker from '../../public/svg/skills/docker.svg';
import git from '../../public/svg/skills/git.svg';
import angular from '../../public/svg/skills/angular.svg';
import react from '../../public/svg/skills/react.svg';
import chatgpt from '../../public/svg/skills/chatgpt.svg';

// Text list — broader skillset including tools without SVG icons available.
// Used for tag/keyword display in places where icons aren't rendered.
export const skillsData = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Node.js',
  'NestJS',
  'Flutter',
  'Dart',
  'Drift (SQLite)',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'Kafka',
  'RabbitMQ',
  'Socket.IO',
  'WebSocket',
  'Firebase',
  'AWS',
  'Nginx',
  'Docker',
  'Git',
  'System Design',
  'Microservices',
  'Distributed Systems',
  'REST APIs',
  'Event-Driven Architecture',
  'Angular',
  'React',
  'Next.js',
]

// Icon list — only entries with matching SVGs in /public/svg/skills/.
// Order is intentional: backend depth first, then mobile, then data,
// then infra, then frontend / supporting.
export const skillData = [
  // Backend core
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Node.js", icon: nodejs },
  { name: "NestJS", icon: nestjs },
  { name: "Python", icon: python },

  // Mobile
  { name: "Flutter", icon: flutter },
  { name: "Dart", icon: dart },

  // Data
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "SQLite", icon: sqlite },

  // Infra
  { name: "AWS", icon: aws },
  { name: "Firebase", icon: firebase },
  { name: "Nginx", icon: nginx },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },

  // Frontend / supporting
  { name: "Angular", icon: angular },
  { name: "React", icon: react },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "ChatGPT", icon: chatgpt },
]
