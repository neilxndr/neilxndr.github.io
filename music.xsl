<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <head>
  <style>
    table
    {
      text-align: center;
      border-radius:20px;
      background-color: antiquewhite;
      border-width: 3px;
      border-color:black;
      transition: .2s;
    }
     table td,th
    {
      text-align: center;
      transition: .2s;
      border-radius:8px;
      
    }
    table td:hover
    {
        transform: scale(1.2);

    }
    table:hover
    {
        transform: scale(1.2);

    }
  </style>

  </head>
  <body>
  <center>
  <h2>My Music</h2>
  <table border="2">
    <tr bgcolor="#9acd32">
      <th>ID</th>
      <th>Title</th>
      <th>Performing Artist</th>
      <th>Album</th>
      <th>Length</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>
    <xsl:for-each select="Songs/MySong">
    <tr>
    <td bgcolor="green"><xsl:value-of select="ID"/></td>
      <td bgcolor="gray"><xsl:value-of select="Title"/></td>
      <td bgcolor="green"><xsl:value-of select="PerformingArtist"/></td>
      <td bgcolor="gray"><xsl:value-of select="ContainedInAlbum"/></td>
      <td bgcolor="green"><xsl:value-of select="SongLength"/></td>
      <td bgcolor="gray"><xsl:value-of select="Year"/></td>
      <td bgcolor="green"><xsl:value-of select="Genre"/></td>
    </tr>
    </xsl:for-each>
  </table>

<h2>Music sorted by Name</h2>
  <table border="2">
    <tr bgcolor="#9acd32">
      <th>ID</th>
      <th>Title</th>
      <th>PerformingArtist</th>
      <th>ContainedInAlbum</th>
      <th>SongLength</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>
    <xsl:for-each select="Songs/MySong">
    <xsl:sort select="type"/>
    <tr>
      <td bgcolor="gray"><xsl:value-of select="ID"/></td>
      <td bgcolor="green"><xsl:value-of select="Title"/></td>
      <td bgcolor="gray"><xsl:value-of select="PerformingArtist"/></td>
      <td bgcolor="green"><xsl:value-of select="ContainedInAlbum"/></td>
      <td bgcolor="gray"><xsl:value-of select="SongLength"/></td>
      <td bgcolor="green"><xsl:value-of select="Year"/></td>
      <td bgcolor="gray"><xsl:value-of select="Genre"/></td>
    </tr>
    </xsl:for-each>
  </table>

<h2> Music: Classic Rock</h2>
<table border="2">
    <tr bgcolor="#9acd32">
      <th>ID</th>
      <th>Title</th>
      <th>PerformingArtist</th>
      <th>ContainedInAlbum</th>
      <th>SongLength</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>
    <xsl:for-each select="Songs/MySong">
    <xsl:if test="Genre='Classic Rock'">
    <tr>
     <td bgcolor="green"><xsl:value-of select="ID"/></td>
      <td bgcolor="gray"><xsl:value-of select="Title"/></td>
      <td bgcolor="green"><xsl:value-of select="PerformingArtist"/></td>
      <td bgcolor="gray"><xsl:value-of select="ContainedInAlbum"/></td>
      <td bgcolor="green"><xsl:value-of select="SongLength"/></td>
      <td bgcolor="gray"><xsl:value-of select="Year"/></td>
      <td bgcolor="green"><xsl:value-of select="Genre"/></td>
    </tr>
    </xsl:if>
    </xsl:for-each>
  </table>

<h2> Music Released after 2000</h2>
<table border="2">
    <tr bgcolor="yellow">
    <th>ID</th>
       <th>Title</th>
      <th>PerformingArtist</th>
      <th>ContainedInAlbum</th>
      <th>SongLength</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>
    <xsl:for-each select="Songs/MySong">
    <tr>
      <td bgcolor="gray"><xsl:value-of select="Title"/></td>
     <xsl:choose>
      <xsl:when test="Year &gt; 2000">
         <td bgcolor="red">
         <xsl:value-of select="Genre"/>
         </td>
      </xsl:when>
      <xsl:otherwise>
         <td><xsl:value-of select="Genre"/></td>
      </xsl:otherwise>
      </xsl:choose>
       <td bgcolor="gray"><xsl:value-of select="ID"/></td>
      <td bgcolor="green"><xsl:value-of select="Title"/></td>
      <td bgcolor="gray"><xsl:value-of select="ContainedInAlbum"/></td>
      <td bgcolor="green"><xsl:value-of select="Title"/></td>
      <td bgcolor="gray"><xsl:value-of select="PerformingArtist"/></td>
      <td bgcolor="green"><xsl:value-of select="Year"/></td>
    </tr>
    </xsl:for-each>
  </table>

  </center>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>