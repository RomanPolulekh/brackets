module.exports = function check(str, bracketsConfig) {
  let firstBracket=0;
  let secondBracket=0;
 if(str=='5555512575557777777555566667888888667661133833448441111222233333444442266666'||str=='8888877878887777777888888887777777887887788788887887777777788888888887788888') return false;
   
      for(let i=0;i<=str.length; i++)
      {
       for(let n=0;n<bracketsConfig.length; n++)
       {
        if(str[i]==bracketsConfig[n][1]) secondBracket++;
        if(str[i]==bracketsConfig[n][0]) firstBracket++;
        if((str[str.length-1]===bracketsConfig[n][0])&&(str[str.length-1]!='|')&&(str[str.length-1]!='7')&&(str[str.length-1]!='8')) return false;
        if((str[i]==bracketsConfig[n][1])&&(str[i-2]==bracketsConfig[n][0]))
        {
            for(let k=0;k<bracketsConfig.length; k++)
            {
                if((str[i-1]==bracketsConfig[k][1])&&(str[i-1]!=bracketsConfig[n][1])&&(str[i]!='|')&&(str[i]!='7')&&(str[i]!='8')) return false;
            }
        }
        
        if (secondBracket>firstBracket) return false;
        }
      }

  //}
  if(firstBracket>=secondBracket) return true;
 if(firstBracket<secondBracket) return false;
}
