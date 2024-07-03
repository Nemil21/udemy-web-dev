import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
export default function TodoItem({todo, deleteTodo, toggleTodo}){
    const labelId = `checkbox-list-label-${todo.id}`;
        return (
            <ListItem
                secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={deleteTodo} >
                    
                    <Delete />
                </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined}
                    onClick={toggleTodo} 
                dense>
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.task} />
                </ListItemButton>
            </ListItem>
            );
}