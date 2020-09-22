import React from 'react';
import './SwipeButtons.css';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
  const refresh = () => {
    return window.location.reload();
  };
  return (
    <div className='swipeButtons'>
      <button className='refresh_button' type='button' onClick={refresh}>
        <IconButton className='swipeButtons_repeat'>
          <ReplayIcon fontSize='large' />
        </IconButton>
      </button>
      <IconButton className='swipeButtons_left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons_star'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons_right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons_lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
