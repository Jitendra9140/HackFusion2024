import React, { useState } from 'react';
import '../styles/projectCard.css';
import '../styles/model.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    backgroundColor: '#070F2B', // Use consistent colors
    color: 'white',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DialogContentComponent = ({ project }) => (
  <div className='Cardm flex flex-col gap-2'>
    <Image width={100} height={20}  className='Imagem h-[200px] ' src={project.image} alt={project.title} />
    <div className='Detailsm text-white p-4 flex flex-col gap-4'>
      <div className=' mb:text-3xl font-extrabold ip:text-2xl'>Guidelines &  Rull Book</div>
       <div className=''> 
            <span className='mb:text-2xl ip:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600'>Eligibility </span> <p className=' mb:text-md  ip:text-[13px] text-white'>Student pursuing B.E. / B.Tech Degree college or any
                Technical Diploma College (OPEN FOR ALL BRANCHES)
        </p>
       </div>
       <div className=''> 
            <span className='mb:text-2xl ip:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600'>Team Size </span> <p className=' mb:text-md  ip:text-[13px] text-white'>Maximum 4 members per Team.
        </p>
       </div>
       <h1 className='mb:text-2xl ip:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600'>The Hackathon is divided into two phases:</h1>
       <div className=' '> 
            <span className='mb:text-2xl ip:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600'>ROUND 1 (Preliminary Round) </span> <p className=' mb:text-md  ip:text-[13px] text-white'>In Round 1, Participating Teams would have to formulate their ideas
on one of the given Problem Statements and Present how they would
like to implement on the given problem statements and give brief
information about the components and tech stack being used and
their utilization in the prototype via an Presentation.(Teams
qualifying in Round 1 will enter Round 2)</p>
       </div>
       <div className=''> 
            <span className='mb:text-2xl ip:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600'>ROUND 2 (Implementation Round)
 </span> <p className=' mb:mb:text-md  ip:text-[13px]  ip:text-[13px]  text-white'>In Round 2, the Implementation round, where the Qualified teams
start implementing on a working software/hardware prototype for
their presented idea. Teams will be given 24 hours for the
implementation. Once the stipulated period is over, teams are
required to present their finished prototype to the judges.
        </p>
       </div>
       <div className=''> 
            <span className='mb:text-2xl ip:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600'>Selection Criteria : </span> <p className=' mb:mb:text-md  ip:text-[13px]  ip:text-[13px]  text-white'>It will be based on your approach to the problem, Practicality &
Implementation of your Idea according to the given instructions.
        </p>
       </div>

    </div>
    <div className='flex justify-center '>
    <button className='py-2 button-primary text-center text-white   cursor-pointer rounded-lg max-w-full w-1/2 '>
      Register Now
    </button>
    </div>
  </div>
);

const ProjectCardItem = ({ project }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='Card'>
      <Image width={100} height={20}  className='Image' src={project.image} alt={project.title} />
      <button className='Button py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-full  ' onClick={handleClickOpen}>
        View Details
      </button>
      <BootstrapDialog onClose={handleClose} open={open} fullWidth maxWidth='md'>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='bg-[#070F2B] text-white'>

        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          className='text-white'
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <DialogContentComponent project={project} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default ProjectCardItem;

