export default {
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, .5)',
        zIndex: 1000,
        overflow: 'auto'
    },
    content: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 'none',
        maxHeight: '100%',
        overflow: 'overlay',
        padding: '2rem',
        background: 'none',
        after: {
            content: '',
            height: '20px',
            background: 'red',
            width: '100%'
        }
    }
}