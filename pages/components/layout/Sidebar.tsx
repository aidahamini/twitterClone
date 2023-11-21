import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SidebarLogo';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import SidebarItem from './SidebarItem';
import {BiLogOut} from 'react-icons/bi'
import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notification',
            icon: BsBellFill
        },        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser
        }];

    return (
        <div className='col-span-1 h-full pr-4 md:pr:6'>
            <div className='flex flex-col items-end'>
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo/>
                    {items.map((item) => (
                        <SidebarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}/>
                    ))}
                    <SidebarItem onClick={() => { } } icon={BiLogOut} label="Logout" href={''}/>
                    <SidebarTweetButton/>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;