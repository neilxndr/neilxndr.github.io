<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <center>
  <h2>My Music</h2>
  <table border="2">
    <tr bgcolor="#9acd32">
      <th>Title</th>
      <th>Performing Artist</th>
      <th>Album</th>
      <th>Length</th>
      <th>Year</th>
      <th>Genre</th>
      <th>Location</th>
    </tr>
    <xsl:for-each select="MusicDatabase/Songs/MySong">
    <tr>
      <td bgcolor="#5F9EA0"><xsl:value-of select="Title"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="PerformingArtist"/></td>
      <td bgcolor="#5F9EA0"><xsl:value-of select="ContainedInAlbum"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="SongLength"/></td>
      <td bgcolor="#5F9EA0"><xsl:value-of select="Year"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="Genre"/></td>
    </tr>
    </xsl:for-each>
  </table>

<h2>Music sorted by Name</h2>
  <table border="2">
    <tr bgcolor="#9acd32">
      <th>Title</th>
      <th>PerformingArtist</th>
      <th>ContainedInAlbum</th>
      <th>SongLength</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>
    <xsl:for-each select="MusicDatabase/Songs/MySong">
    <xsl:sort select="type"/>
    <tr>
      <td bgcolor="#5F9EA0"><xsl:value-of select="Title"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="PerformingArtist"/></td>
      <td bgcolor="#5F9EA0"><xsl:value-of select="ContainedInAlbum"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="SongLength"/></td>
      <td bgcolor="#5F9EA0"><xsl:value-of select="Year"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="Genre"/></td>
    </tr>
    </xsl:for-each>
  </table>

<h2> Music: Classic Rock</h2>
<table border="2">
    <tr bgcolor="#9acd32">
      <th>Title</th>
      <th>PerformingArtist</th>
      <th>ContainedInAlbum</th>
      <th>SongLength</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>
    <xsl:for-each select="MusicDatabase/Songs/MySong">
    <xsl:if test="Genre=Classic Rock">
    <tr>
       <td bgcolor="#5F9EA0"><xsl:value-of select="Title"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="PerformingArtist"/></td>
      <td bgcolor="#5F9EA0"><xsl:value-of select="ContainedInAlbum"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="SongLength"/></td>
      <td bgcolor="#5F9EA0"><xsl:value-of select="Year"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="Genre"/></td>
    </tr>
    </xsl:for-each>
  </table>


<table border="2">
    <tr bgcolor="#9acd32">
       <th>Title</th>
      <th>PerformingArtist</th>
      <th>ContainedInAlbum</th>
      <th>SongLength</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>
    <xsl:for-each select="MusicDatabase/Songs/MySong">
    <tr>
      <td bgcolor="#5F9EA0"><xsl:value-of select="fid"/></td>
     <xsl:choose>
      <xsl:when test="price>15000">
         <td bgcolor="#ff00ff">
         <xsl:value-of select="category"/>
         </td>
      </xsl:when>
      <xsl:otherwise>
         <td><xsl:value-of select="category"/></td>
      </xsl:otherwise>
      </xsl:choose>
      <td bgcolor="#5F9EA0"><xsl:value-of select="type"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="price"/></td>
      <td bgcolor="#5F9EA0"><xsl:value-of select="year"/></td>
      <td bgcolor="#A9A9A9"><xsl:value-of select="description"/></td>
    </tr>
    </xsl:for-each>
  </table>

  </center>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>