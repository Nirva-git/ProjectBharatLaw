using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BharatLaw.Models
{
    public class ResearchBook
    {
        [Key]
        public int id { get; set; }
        [Required] public string Name { get; set; }
        public DateTime LastModified { get; set; }
        public DateTime DateCreated { get; set; }

        [ForeignKey("UserId")]
        
        public int UserId { get; set; }

        [JsonIgnore]
        public User User { get; set; }
    }
}
