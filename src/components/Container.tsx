import {cn} from '../lib/utils'

export default function Container ({className, children} : {className?: string, children: React.ReactNode}) {
    return (
        <div className={cn("container mx-auto w-screen md:w-screen lg:w-2/3 py-1", className)}>
            {children}
        </div>
    )
}   