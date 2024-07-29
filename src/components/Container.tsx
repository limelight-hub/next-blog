import {cn} from '../lib/utils'

export default function Container ({className, children} : {className?: string, children: React.ReactNode}) {
    return (
        <div className={cn("container mx-auto px-20 py-4 ", className)}>
            {children}
        </div>
    )
}   