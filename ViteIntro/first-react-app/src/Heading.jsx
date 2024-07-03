export default function Heading({color = 'olive', text, fontSize}){
    const styles = {color, fontSize}
    return(
        <h1 style={styles}>{text}</h1>
    )

}