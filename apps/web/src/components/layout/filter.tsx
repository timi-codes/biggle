'use client'
import React from 'react'
import { Input } from '@biggle/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@radix-ui/react-select';

const Filter = () => {
    return (
      <div className="flex items-center justify-center space-x-6">
        <div role='search' className='relative bg-background rounded-full min-w-72'>
          <div className='flex items-center justify-center absolute left-0 top-0 mt-1 ml-1 w-10 h-10'>
            <MagnifyingGlassIcon className='absolute mb-1 stroke-[#303240]	stroke-1' width={18} height={18} />
          </div>
          <Input className='unstyle pl-10 pr-4 text-[13px] border-spacing-[12px] h-[43px] font-semibold placeholder:font-normal' placeholder='Try "David Adeleke" or Davido'/>
        </div>
        <div>
          <Select>
            <SelectTrigger className="text-xl">
              <SelectValue placeholder="🇳🇬" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="🇳🇬">Nigeria</SelectItem>
                <SelectItem value="banana">Ghana</SelectItem>
                <SelectItem value="blueberry">South Africa</SelectItem>
                <SelectItem value="grapes">Canada</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    )
}

export default Filter;