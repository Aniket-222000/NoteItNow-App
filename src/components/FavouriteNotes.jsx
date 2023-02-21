import React, { useState }  from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function FavouriteNote(props) {

        

    return <FormControlLabel className="fav"
    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH"   />}
  /> ; 
};

export default FavouriteNote;
