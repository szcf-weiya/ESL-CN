import os
import re
import glob
# ([\u4e00-\u9fa5]+): chinese translation
# (\b[a-zA-Z ]+\b): original
pat = re.compile(r"\*\*([\u4e00-\u9fa5\-a-zA-Z]+)\s?\((\b[a-zA-Z ,\-]+\b)\)\*\*")

tags = [[] for i in range(26)]
docsdir = os.listdir("docs/")
tagdict = dict()
for i in range(1, 27):
    # get the idx of the child directory
    for idx, x in enumerate(docsdir):
        if f'{i:02}' in x:
            break
    chdir = docsdir[idx]
    for file in glob.glob(f"docs/{chdir}/*.md"):
        print(f"processing {file}...")
        fl = open(file, "rt")
        contents = fl.read()
        fl.close()
        mat = pat.findall(contents)
        # get unique elements
        mat = list(set(mat))
        print(mat)
        if mat:
            secid = file.split(f'docs/{chdir}/')[1].split('-')[0]
            url = file.split('docs/')[1].replace('.md', '/index.html')
            for m in mat:
                key = f'{m[1]}: {m[0]}'
                if secid == "Bibliographic":
                    val = f'[第 {i} 章文献笔记]({url})'
                else:
                    val = f'[第 {secid} 节]({url})'
                try:
                    tagdict[key].append(val)
                except:
                    tagdict[key] = [val]
#                val = f"- [{m[1]}: {m[0]}]({url})"
                # get the first character
#                tags[ord(m[1][0].upper()) - ord('A')].append(val)

# rearrange 
for k in tagdict.keys():
    v = tagdict[k]
    val = "- " + k + " (" + ', '.join(v) + ")"
    tags[ord(k[0].upper()) - ord('A')].append(val)

# write into a tag file
tagpage = open("docs/tag.md", "w")
letters = [chr(i+ord('A')) for i in range(26)]
for i in range(26):
    # escape letters without tags
    if tags[i]:
        # section
        tagpage.write(f"\n## {letters[i]}\n")
        # !!strange behavior of `writelines`: https://stackoverflow.com/questions/13730107/writelines-writes-lines-without-newline-just-fills-the-file
        tagpage.writelines(tag + '\n' for tag in tags[i])

    
tagpage.close()
