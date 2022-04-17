
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Customlink = ({children,to,...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path:resolved.pathname,end:true});
    return (
        
            <Link
             className={`${match?' bg-slate-200 rounded-full text-white':''}`}
             to={to}
             {...props}
            >
            {children}

            </Link>
       
    );
};

export default Customlink;