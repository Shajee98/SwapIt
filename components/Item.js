import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

function Item({owner,contact,name,image,description}) {
    return (
        <Card style={{width: "160px", height: "160px", borderRadius: "5px", margin: "10px"}}>
        <CardHeader title={owner} subheader={contact}/>
        <CardMedia image={image}/>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
        </Card>
    )
}

export default Item
