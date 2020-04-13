import React from 'react';
import './Skills.css';
import react from './icon/react-1.svg';
import JS from './icon/900px-JavaScript-logo.png';
import CPP from './icon/cpppp-490x490.png';
// import jquery from './icon/iconfinder_JQuery_logo_282806.png';
import css from './icon/css.png';
import github from './icon/github-logo.png';
// import html from './icon/html-5.png';
import C from './icon/icons8-c-programming-500.png';
import nodejs from './icon/icons8-nodejs-500.png';
import java from './icon/java.png';
import mysql from './icon/mysql.png';


const Skills = () => (

    <div className="Skill" id="s">
        {/* <h1 className="Skill_Heeding"> Skills </h1> */}
        <h1> Skills </h1>
        <div className="Skill_Content">
            <h2 className="Skill_Title"> Launage</h2>
            <span className="Skill_Content">
                <div className="SKill_box">
                    <div className="Skill_image_container" style={{ backgroundImage: `url(${C})` }}><div className="Skill_label">Basic</div></div>
                    <div className="Skill_image_container" style={{ backgroundImage: `url(${CPP})` }}><div className="Skill_label">Basic</div></div>
                    <div className="Skill_image_container" style={{ backgroundImage: `url(${java})` }}><div className="Skill_label">Intermediate</div></div>
                    <div className="Skill_image_container" style={{ backgroundImage: `url(${JS})` }}><div className="Skill_label">Intermediate</div></div>
                </div>
            </span>
            <h2 className="Skill_Title"> Web Skils</h2>
            <span className="Skill_Content">
                {/* <div className="Skill_image_container" style={{ backgroundImage: `url(${html})` }}><div className="Skill_label">Intermediate</div></div> */}
                <div className="Skill_image_container" style={{ backgroundImage: `url(${css})` }}><div className="Skill_label">Intermediate</div></div>
                <div className="Skill_image_container" style={{ backgroundImage: `url(${JS})` }}><div className="Skill_label">Intermediate</div></div>
                {/* <div className="Skill_image_container" style={{ backgroundImage: `url(${jquery})` }}><div className="Skill_label">Basic</div></div> */}

            </span>
            <h2 className="Skill_Title">FrameWork</h2>
            <span className="Skill_Content">
                <div className="Skill_image_container" style={{ backgroundImage: `url(${react})` }}><div className="Skill_label">Intermediate</div></div>
                <div className="Skill_image_container" style={{ backgroundImage: `url(${nodejs})` }}><div className="Skill_label">Intermediate</div></div>
            </span>

            <h2 className="Skill_Title">DataBase</h2>
            <span className="Skill_Content">
                <div className="Skill_image_container" style={{ backgroundImage: `url(${mysql})` }}><div className="Skill_label">Intermediate</div></div>
            </span>


            <h2 className="Skill_Title">Etc</h2>
            <span className="Skill_Content">
                <div className="Skill_image_container" style={{ backgroundImage: `url(${github})` }}><div className="Skill_label">Intermediate</div></div>
            </span>
        </div>
    </div>
);


export default Skills;