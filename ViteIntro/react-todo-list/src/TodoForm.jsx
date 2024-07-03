import { ListItem, TextField } from "@mui/material";
import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Create } from "@mui/icons-material";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Add Todo" variant="outlined" value={text} onChange={handleChange}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton aria-label="Create Todo" edge="end" type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    )
}



